import type { Competitor } from "../../types/types";
import LeaderboardRow from "./LeaderboardComponents/LeaderboardRow";
import { competitors } from "../../data/competitors";

const Leaderboard = () => {
    return (
        <>
            {competitors.map((competitor: Competitor) => {
                return <LeaderboardRow {...competitor} />;
            })}
        </>
    );
};

export default Leaderboard;
