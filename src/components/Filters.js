import { Form, Button } from "react-bootstrap";
import "./style.css"

const Filters = () => {
    return (
        <div className="filters">
            <span className = "title"> Filter Products</span>
            <span>
                <Form.Check
                inline
                label = "Ascending"
                name = "group1"
                type= "radio"
                id = {'inline-1'}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Descending"
                name = "group1"
                type= "radio"
                id = {'inline-2'}
                />
            </span>
            <div className = "filterButton">
            <Button variant="light">Clear Filters</Button>
            </div>
        </div>
    )
}

export default Filters;