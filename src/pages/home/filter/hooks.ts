import { useState, useEffect } from 'react';
import { SwapiService } from '@/services/swapi';

export const useGelAllFilters = () => {
  // const [dataHomeworlds, setDataHomeworld] = useState<any>();
  // const [dataStarships, setDataStarships] = useState<any>();
  // const [dataSpecies, setDataSpecies] = useState<any>();
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setError(null);
  //     try {
  //       const starWarsService = new SwapiService();
  //       const [homeworldResponse, startshipsResponse, speciesResponse] = await Promise.all([
  //         starWarsService.getAllPlanets(),
  //         starWarsService.getAllStartships(),
  //         starWarsService.getAllSpecies()
  //       ]);
  //
  //       setDataHomeworld(homeworldResponse?.body);
  //       setDataStarships(startshipsResponse);
  //       setDataSpecies(speciesResponse);
  //     } catch {
  //       setError('Failed to fetch data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //
  //   fetchData();
  // }, []);
  const loading = false;
  const error = false;

  const dataHomeworlds = [
    { id: 1, name: 'Tatooine' },
    { id: 2, name: 'Alderaan' },
    { id: 3, name: 'Yavin IV' },
    { id: 4, name: 'Hoth' },
    { id: 5, name: 'Dagobah' },
    { id: 6, name: 'Bespin' },
    { id: 7, name: 'Endor' },
    { id: 8, name: 'Naboo' },
    { id: 9, name: 'Coruscant' },
    { id: 10, name: 'Kamino' },
    { id: 11, name: 'Geonosis' },
    { id: 12, name: 'Utapau' },
    { id: 13, name: 'Mustafar' },
    { id: 14, name: 'Kashyyyk' },
    { id: 15, name: 'Polis Massa' },
    { id: 16, name: 'Mygeeto' },
    { id: 17, name: 'Felucia' },
    { id: 18, name: 'Cato Neimoidia' },
    { id: 19, name: 'Saleucami' },
    { id: 20, name: 'Stewjon' },
    { id: 21, name: 'Eriadu' },
    { id: 22, name: 'Corellia' },
    { id: 23, name: 'Rodia' },
    { id: 24, name: 'Nal Hutta' },
    { id: 25, name: 'Dantooine' },
    { id: 26, name: 'Bestine IV' },
    { id: 27, name: 'Ord Mantell' },
    { id: 28, name: 'Trandosha' },
    { id: 29, name: 'Socorro' },
    { id: 30, name: 'Mon Cala' },
    { id: 31, name: 'Chandrila' },
    { id: 32, name: 'Sullust' },
    { id: 33, name: 'Toydaria' },
    { id: 34, name: 'Malastare' },
    { id: 35, name: 'Dathomir' },
    { id: 36, name: 'Ryloth' },
    { id: 37, name: 'Aleen Minor' },
    { id: 38, name: 'Vulpter' },
    { id: 39, name: 'Troiken' },
    { id: 40, name: 'Tund' },
    { id: 41, name: 'Haruun Kal' },
    { id: 42, name: 'Cerea' },
    { id: 43, name: 'Glee Anselm' },
    { id: 44, name: 'Iridonia' },
    { id: 45, name: 'Tholoth' },
    { id: 46, name: 'Iktotch' },
    { id: 47, name: 'Quermia' },
    { id: 48, name: 'Dorin' },
    { id: 49, name: 'Champala' },
    { id: 50, name: 'Mirial' },
    { id: 51, name: 'Serenno' },
    { id: 52, name: 'Concord Dawn' },
    { id: 53, name: 'Zolan' },
    { id: 54, name: 'Ojom' },
    { id: 55, name: 'Skako' },
    { id: 56, name: 'Muunilinst' },
    { id: 57, name: 'Shili' },
    { id: 58, name: 'Kalee' },
    { id: 59, name: 'Umbara' },
    { id: 60, name: 'Jakku' }
  ];

  const dataStarships = [
    { 2: 'CR90 corvette' },
    { 3: 'Star Destroyer' },
    { 5: 'Sentinel-class landing craft' },
    { 9: 'Death Star' },
    { 10: 'Millennium Falcon' },
    { 11: 'Y-wing' },
    { 12: 'X-wing' },
    { 13: 'TIE Advanced x1' },
    { 15: 'Executor' },
    { 17: 'Rebel transport' },
    { 21: 'Slave 1' },
    { 22: 'Imperial shuttle' },
    { 23: 'EF76 Nebulon-B escort frigate' },
    { 27: 'Calamari Cruiser' },
    { 28: 'A-wing' },
    { 29: 'B-wing' },
    { 31: 'Republic Cruiser' },
    { 32: 'Droid control ship' },
    { 39: 'Naboo fighter' },
    { 40: 'Naboo Royal Starship' },
    { 41: 'Scimitar' },
    { 43: 'J-type diplomatic barge' },
    { 47: 'AA-9 Coruscant freighter' },
    { 48: 'Jedi starfighter' },
    { 49: 'H-type Nubian yacht' },
    { 52: 'Republic Assault Ship' },
    { 58: 'Solar Sailer' },
    { 59: 'Trade Federation cruiser' },
    { 61: 'Theta-class T-2c shuttle' },
    { 63: 'Republic attack cruiser' },
    { 64: 'Naboo star skiff' },
    { 65: 'Jedi Interceptor' },
    { 66: 'arc-170' },
    { 68: 'Belbullab-22 starfighter' },
    { 74: 'V-wing' }
  ];
  const dataSpecies = [
    { 1: 'Human' },
    { 2: 'Droid' },
    { 3: 'Wookie' },
    { 4: 'Rodian' },
    { 5: 'Hutt' },
    { 6: "Yoda's species" },
    { 7: 'Trandoshan' },
    { 8: 'Mon Calamari' },
    { 9: 'Ewok' },
    { 10: 'Sullustan' },
    { 11: 'Neimodian' },
    { 12: 'Gungan' },
    { 13: 'Toydarian' },
    { 14: 'Dug' },
    { 15: "Twi'lek" },
    { 16: 'Aleena' },
    { 17: 'Vulptereen' },
    { 18: 'Xexto' },
    { 19: 'Toong' },
    { 20: 'Cerean' },
    { 21: 'Nautolan' },
    { 22: 'Zabrak' },
    { 23: 'Tholothian' },
    { 24: 'Iktotchi' },
    { 25: 'Quermian' },
    { 26: 'Kel Dor' },
    { 27: 'Chagrian' },
    { 28: 'Geonosian' },
    { 29: 'Mirialan' },
    { 30: 'Clawdite' },
    { 31: 'Besalisk' },
    { 32: 'Kaminoan' },
    { 33: 'Skakoan' },
    { 34: 'Muun' },
    { 35: 'Togruta' },
    { 36: 'Kaleesh' },
    { 37: "Pau'an" }
  ];

  return {
    dataHomeworlds,
    dataStarships,
    dataSpecies,
    loading,
    error
  };
};
