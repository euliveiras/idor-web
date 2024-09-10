import {LoaderFunctionArgs} from "react-router-dom";

export function rootLoader({request}: LoaderFunctionArgs){
	console.log(request.headers)

	return null
}

export default function Root() {
	return <p>root</p>
}
