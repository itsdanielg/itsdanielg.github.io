import React, {useState, useEffect, useRef} from 'react';
import '../css/FilterTag.css'

function FilterTag(props) {

    const [isSelected, setIsSelected] = useState(() => {
        return false;
    });

    const ref = useRef(null);

    const addFilter = (textContent) => {
        props.setFilters(prevFilters => [...prevFilters, (textContent)]);
    }

    const removeFilter = (textContent) => {
        var newFilters = props.filters.filter((filter) => filter !== textContent);
        props.setFilters(newFilters);
    }

    useEffect(() => {
        let div = ref.current;
        if (isSelected) {
            div.className = "filter-nav-tag-selected";
            addFilter(div.textContent);
        }
        else {
            div.className = "filter-nav-tag";
            removeFilter(div.textContent);
        }
    }, [isSelected])

    return (
        <div ref={ref} className="filter-nav-tag" onClick={() => setIsSelected(!isSelected)}>
            <p>{props.name}</p>
        </div>
    )
}

export default FilterTag;