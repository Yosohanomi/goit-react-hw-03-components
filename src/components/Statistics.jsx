export const Statistics = ({title, stats}) => {
    return (
        <section >
            <h2>{title}</h2>
            
            <ul>
                {stats.map(element => {
                    return (
                        <li key={element.id}>
                            <span>{element.label}</span>
                            <span>{element.percentage + '%'}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}