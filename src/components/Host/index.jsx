import '../Host/index.css';

export const Host = ({host}) => (
    <div className="host">
        <h3 className="host_name">{host.name}</h3>
        <img className="host_picture" src={host.picture} alt={host.name} />
    </div>
)