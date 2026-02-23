interface MovieProps {
    title: string;
    genre: string;
    showTime: number;
}

const getTimeOfDay = (hour: number) => {
    if (hour < 12) return "Morning";
    if (hour < 18) return "Afternoon";
    return "Evening";
};

const getBadgeClass = (label: "Morning" | "Afternoon" | "Evening") => {
    if (label === "Morning") return "badge badge--morning";
    if (label === "Afternoon") return "badge badge--afternoon";
    return "badge badge--evening";
};

const MovieRow = ({ title, genre, showTime }: MovieProps) => {
    const label = getTimeOfDay(showTime);
    const badgeClass = getBadgeClass(label);

    return (
        <div className="movieRow">
            <div className="movieRow__main">
                <h3 className="movieRow__title">{title}</h3>
                <p className="movieRow__genre">{genre}</p>
            </div>

            <div className="movieRow__right">
                <span className={badgeClass}>{label}</span>
                <span className="movieRow__time">{showTime}:00</span>
            </div>
        </div>
    );
};

export default MovieRow;
