export const Host = ({host}) => (
    <div>
        <h3>{host.name}</h3>
        <img src={host.picture} alt={host.name} />
    </div>
)