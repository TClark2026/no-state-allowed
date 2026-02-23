import type { Competitor } from "../../types/types";
import LeaderboardRow from "./LeaderboardComponents/LeaderboardRow";
import { competitors } from "../../data/competitors";

const Leaderboard = () => {
    const sorted = competitors.sort((a, b) => b.score - a.score);
    const topThree = sorted.slice(0, 3);

    return (
        <>
            {topThree.map((competitor: Competitor, i) => {
                return <LeaderboardRow {...competitor} place={i} />;
            })}
        </>
    );
};

export default Leaderboard;
