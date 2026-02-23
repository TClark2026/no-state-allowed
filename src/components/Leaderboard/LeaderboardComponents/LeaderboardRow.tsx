interface LeaderboardProps {
    name: string;
    score: number;
}

const LeaderboardRow = ({ name, score }: LeaderboardProps) => {
    return (
        <div>
            <h3>{`${name}, scored: ${score}`}</h3>
        </div>
    );
};

export default LeaderboardRow;
