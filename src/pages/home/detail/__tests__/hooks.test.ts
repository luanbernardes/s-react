import { act, renderHook } from '@testing-library/react';
import { useDetail } from '../hooks';
import { StarWarsService } from '@/services/star-wars';
import { beforeEach, describe, expect, it } from 'vitest';

// Mock the StarWarsService
vi.mock('@/services/star-wars');

const mockGetImage = StarWarsService.prototype.getImage as vi.Mock;
const mockGetHomeworld = StarWarsService.prototype.getHomeworld as vi.Mock;

describe('useDetail', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch data successfully', async () => {
    const mockImageResponse = { body: [{ url: 'image-url' }] };
    const mockHomeworldResponse = { body: { name: 'Tatooine' } };

    mockGetImage.mockResolvedValue(mockImageResponse);
    mockGetHomeworld.mockResolvedValue(mockHomeworldResponse);

    const { result } = renderHook(() => useDetail('Luke Skywalker', 'homeworld-url'));

    expect(result.current.loading).toBe(true);

    await act(async () => {});

    expect(result.current.loading).toBe(false);
    expect(result.current.dataImage).toEqual(mockImageResponse.body[0]);
    expect(result.current.dataHomeworld).toEqual(mockHomeworldResponse.body);
    expect(result.current.error).toBeNull();
  });

  it('should handle errors', async () => {
    mockGetImage.mockRejectedValue(new Error('Failed to fetch image'));
    mockGetHomeworld.mockRejectedValue(new Error('Failed to fetch homeworld'));

    const { result } = renderHook(() => useDetail('Luke Skywalker', 'homeworld-url'));

    expect(result.current.loading).toBe(true);

    await act(async () => {});

    expect(result.current.loading).toBe(false);
    expect(result.current.dataImage).toBeUndefined();
    expect(result.current.dataHomeworld).toBeUndefined();
    expect(result.current.error).toBe('Failed to fetch data');
  });

  it('should not fetch data if no parameters are provided', async () => {
    const { result } = renderHook(() => useDetail());

    expect(result.current.loading).toBe(true);

    await act(async () => {});

    expect(result.current.loading).toBe(false);
    expect(result.current.dataImage).toBeUndefined();
    expect(result.current.dataHomeworld).toBeUndefined();
    expect(result.current.error).toBeNull();
  });
});
