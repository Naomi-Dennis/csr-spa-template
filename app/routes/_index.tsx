import { Welcome } from "~/components/welcome/welcome";
import { getFunctions, httpsCallable } from "firebase/functions";

export const clientLoader = async () => {
    const functions = getFunctions();
    const myCallableFunction = httpsCallable(functions, "myCallableFunction");

    const response = await myCallableFunction();
    return response.data;
}
export default function Route() {
    return <Welcome />
}