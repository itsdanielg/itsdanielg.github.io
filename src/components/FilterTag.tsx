import {useState, useEffect, useRef} from 'react';
import '../styles/FilterTag.css'
import '../styles/mobile/FilterTag.css'

interface Props {
    name: string,
    filters: string[],
    setFilters(filters: any): any;
}

function FilterTag(props: Props) {

    const [isSelected, setIsSelected] = useState(() => {
        return false;
    });

    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let filterNavTag: any = filterRef.current;
        if (isSelected) {
            filterNavTag.className = "filter-nav-tag-selected";
            props.setFilters((prevFilters: string[]) => [...prevFilters, (filterNavTag.textContent)]);
        }
        else {
            filterNavTag.className = "filter-nav-tag";
            props.setFilters(props.filters.filter((filter) => filter !== filterNavTag.textContent));
        }
    }, [isSelected])

    return (
        <div ref={filterRef} className="filter-nav-tag" onClick={() => setIsSelected(!isSelected)}>
            <p>{props.name}</p>
        </div>
    )
}

export default FilterTag;