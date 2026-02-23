interface LeaderboardProps {
    name: string;
    score: number;
    place: number;
}

const LeaderboardRow = ({ name, score, place }: LeaderboardProps) => {
    let medal: string = "";
    if (place === 0) {
        medal = "🥇";
    } else if (place === 1) {
        medal = "🥈";
    } else {
        medal = "🥉";
    }
    return (
        <div>
            <h3>{`${name}, scored: ${score} ${medal}`}</h3>
        </div>
    );
};

export default LeaderboardRow;
