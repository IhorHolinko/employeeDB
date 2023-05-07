// import "./app-filter.css";

// const AppFilter = () => {
//     return (
//         <div className="btn-group">
//             <button type="button"
//                     className="btn btn-light">
//                     Все сотрудники
//             </button>
//             <button type="button"
//                     className="btn btn-outline-light">
//                     На повышение
//             </button>
//             <button type="button"
//                     className="btn btn-outline-light">
//                     З/П больше 1000$
//             </button>
//         </div>
//     )
// }

// export default AppFilter;

import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees', colored: false},
        {name: 'rise', label: 'For promotion', colored: false},
        {name: 'moreThen1000', label: 'Salary more then 1000$', colored: true}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = colored ? {color:'red'} : null;
        return (
            <button type="button"
                className={`btn ${clazz}`} 
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button className="btn btn-light" type="button">All employees</button>
            <button className="btn btn-outline-light" type="button">For promotion</button>
            <button className="btn btn-outline-light" type="button">Salary more then 1000$</button> */}
        </div>
    );
}

export default AppFilter;