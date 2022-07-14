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

    useEffect(() => {
        let div: any = filterRef.current;
        if (isSelected) {
            div.className = "filter-nav-tag-selected";
            props.setFilters((prevFilters: string[]) => [...prevFilters, (div.textContent)]);
        }
        else {
            div.className = "filter-nav-tag";
            props.setFilters(props.filters.filter((filter) => filter !== div.textContent));
        }
    })

    return (
        <div ref={filterRef} className="filter-nav-tag" onClick={() => setIsSelected(!isSelected)}>
            <p>{props.name}</p>
        </div>
    )
}

export default FilterTag;