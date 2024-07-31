import { useEffect, useRef } from 'react';

// Your component code
const MyComponent = ({ trendyGames, trendDrawNumbers, lotteryTpeIdsAndName }) => {
  // Ref to store previous values of dependencies
  const prevDepsRef = useRef({ trendyGames, trendDrawNumbers, lotteryTpeIdsAndName });

  useEffect(() => {
    const prevDeps = prevDepsRef.current;

    if (prevDeps.trendyGames !== trendyGames) {
      console.log('trendyGames changed:', prevDeps.trendyGames, '=>', trendyGames);
    }
    if (prevDeps.trendDrawNumbers !== trendDrawNumbers) {
      console.log('trendDrawNumbers changed:', prevDeps.trendDrawNumbers, '=>', trendDrawNumbers);
    }
    if (prevDeps.lotteryTpeIdsAndName !== lotteryTpeIdsAndName) {
      console.log('lotteryTpeIdsAndName changed:', prevDeps.lotteryTpeIdsAndName, '=>', lotteryTpeIdsAndName);
    }

    // Your original useEffect code
    const t0 = performance.now();
    setTrendJSON([]);
    const lotteryInformation = Object.entries(lotteryTpeIdsAndName);
    for (const [
      key,
      { game_type_id, lottery_id: lottery_type_id, game_type_name },
    ] of lotteryInformation) {
      trendyGames.forEach((trend) => {
        for (const trendData of Object.values(trendInfo)) {
          if (isEmpty(trendData) || !trendData[lottery_type_id]) continue;
          const trendInformation = Object.entries(trendData?.[lottery_type_id]);
          for (const [
            _,
            { name, group_type, gn_id, odds, sub_game },
          ] of trendInformation) {
            handleTrend(
              trend,
              name,
              group_type,
              gn_id,
              odds,
              sub_game,
              game_type_id,
              lottery_type_id,
              game_type_name,
              key
            );
          }
        }
      });
    }
    const t1 = performance.now();
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

    // Update previous dependencies
    prevDepsRef.current = { trendyGames, trendDrawNumbers, lotteryTpeIdsAndName };
  }, [trendyGames, trendDrawNumbers, lotteryTpeIdsAndName]);

  // Return your component's JSX
  return <div>Your Component JSX</div>;
};
