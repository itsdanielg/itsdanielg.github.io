import '../css/SocialLink.css';

interface Props {
    name: string,
    url: string,
    icon: string
}

function SocialLink (props: Props) {

    return (
        <div className="social-link-wrapper">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img src={props.icon} alt={`${props.name} Icon`}></img>
            </a>
        </div>
    )

}

export default SocialLink;