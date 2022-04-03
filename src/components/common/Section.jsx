import PropTypes from "prop-types";
import Button from "./Button";
import TextField from "./TextField";
import classNames from "classnames";

function Section(props) {

    const fieldClasses = classNames(
        "pt-8 pl-12 pr-12"
    )

    const formWrapperClasses = classNames(
        "box-border",
        "h-full w-[500px]",
        "border-1",
        "bg-gray-50"
    )

    const tittleClasses = classNames(
        "box-border",
        "h-full w-full",
        "text-2xl text-white",
        "pt-4 pb-4 pl-12 pr-12",
        "border-1",
        "bg-gray-500"
    )

    const buttonWrapperClasses = classNames(
        'pt-8 pb-8 pl-12 pr-12'
    )

    function renderFields() {
        const fields = []
        
        if(props.fields)
            props.fields.map(item => {
                fields.push(<p className={fieldClasses}><text>{item[0]}  </text><text> {item[1]} </text><Button label="izmeni" /></p>)
            })
        return fields
        
    }

    function renderButton() {
        if (props.button) 
            return (
                <div className={buttonWrapperClasses}>
                    <Button label={props.button} className='w-full' />
                </div>)
    }

    return (
        <div className={formWrapperClasses}>
            <div className={tittleClasses}>
                {props.title}
            </div>
            <form>
                <div>
                    {renderFields().map(r => r)}
                </div>
                {renderButton()}
            </form>
        </div>


    );
}

Section.propTypes = {
    title: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.array),
    button: PropTypes.string
};

export default Section;
