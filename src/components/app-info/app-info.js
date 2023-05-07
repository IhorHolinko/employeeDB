// import "./app-info.css";

// const AppInfo = () => {
//     return (
//         <div className="app-info">
//             <h1>Учет сотрудников в компании N</h1>
//             <h2>Общее число сотрудников:</h2>
//             <h2>Премию получат:</h2>
//         </div>
//     )
// }

// export default AppInfo;

import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in Gmbl</h1>
            <h2>All amount of employees: {employees}</h2>
            <h2>Premium will get: {increased}</h2>
        </div>
    )
}

export default AppInfo