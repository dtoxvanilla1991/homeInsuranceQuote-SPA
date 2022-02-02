import classes from './Body.module.css';

const Body = ({renderAddons}) => {
    return (
        <>
            <h2>Tailor your cover to enchance your experience:</h2>
            <br/>
            <div className={classes.extras}>
            {renderAddons()}      
            </div>
        </>
    )
}



export default Body;
