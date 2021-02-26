import axios from "axios";

type Props = {
    name: string;
}
const fetchProfile = ({name}: Props) => {
    return axios(`https://api.github.com/users/${name}`)
}

export default  fetchProfile;