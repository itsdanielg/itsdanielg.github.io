import {useState, useEffect, useRef} from 'react';
import '../css/FilterTag.css'

interface Props {
    name: string,
    filters: string[],
    setFilters(any: any): any;
}

function FilterTag(props: Props) {

    const [isSelected, setIsSelected] = useState(() => {
        return false;
    });

    const filterRef = useRef<HTMLDivElement>(null);

    const addFilter = (textContent: string) => {
        props.setFilters((prevFilters: string[]) => [...prevFilters, (textContent)]);
    }

    const removeFilter = (textContent: string) => {
        var newFilters = props.filters.filter((filter) => filter !== textContent);
        props.setFilters(newFilters);
    }

    useEffect(() => {
        let div: any = filterRef.current;
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
        <div ref={filterRef} className="filter-nav-tag" onClick={() => setIsSelected(!isSelected)}>
            <p>{props.name}</p>
        </div>
    )
}

export default FilterTag;