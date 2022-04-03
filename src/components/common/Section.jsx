import PropTypes from "prop-types";
import Button, { BUTTON_DESIGN } from "./Button";
import classNames from "classnames";

function Section(props) {

    const fieldClasses = classNames(
        "pt-4 pl-12 pr-12 pb-4 flex flex-row"
    )

    const formWrapperClasses = classNames(
        "box-border",
        "h-full w-[500px]",
        "border-4",
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
                fields.push(<div className={fieldClasses}>
                                <div className="inline basis-1/3">{item[0]}  </div>
                                <div className="inline basis-1/3"> {item[1]} </div>
                                <Button label="izmeni" design={BUTTON_DESIGN.INLINE} className = 'basis-1/3' />
                            </div>)
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
