import React, {useState} from 'react';
import '../css/FilterTag.css'

function FilterTag(props) {

    const [isSelected, setIsSelected] = useState(() => {
        return false;
    });

    const addFilter = (innerHTML) => {
        props.setFilters(prevFilters => [...prevFilters, (innerHTML)]);
    }

    const removeFilter = (innerHTML) => {
        var newFilters = props.filters.filter((filter) => filter !== innerHTML);
        props.setFilters(newFilters);
    }

    const changeSelected = (e) => {
        let div = e.currentTarget;
        if (div.className === "filter-nav-tag-selected") {
            div.className = "filter-nav-tag";
            removeFilter(div.innerHTML);
            setIsSelected(false);
        }
        else {
            div.className = "filter-nav-tag-selected";
            addFilter(div.innerHTML);
            setIsSelected(true);
        }
    }

    return (
        <div className="filter-nav-tag" onClick={changeSelected}>
            <p>
                {props.name}
            </p>
        </div>
    )
}

export default FilterTag;