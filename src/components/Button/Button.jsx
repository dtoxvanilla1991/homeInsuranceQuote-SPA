import PropTypes from 'prop-types';
import classes from './Button.module.css';


const Button = ({buttonTitle, style}) => {
    return (
        <div className={`box ${classes.bg-1}`}>
        <button data-testid="button" className={`${classes.button} ${classes.planButton} ${classes['button-border-thick']} ${classes['button-text-upper']} ${classes.buttonSizeSmall}`} style={style}>{buttonTitle}</button>
</div>
    )
}

Button.defaultProps = {
    buttonTitle: "Select this addon",
    style: {
        padding: '0.5em 2em'
    },
}

Button.propTypes = {
    buttonTitle: PropTypes.string
}

export default Button;
