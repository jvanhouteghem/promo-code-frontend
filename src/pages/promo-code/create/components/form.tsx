import {MOCK_FORM_NESTED_HORIZONTAL} from "@/pages/promo-code/create/components/form-catalog.model";
import { FORM_CONTEXT } from "react-form-catalog";
import { FormFactoryComponent } from "react-form-catalog";

export default function PromoCodeForm(): JSX.Element {
    const catalog = MOCK_FORM_NESTED_HORIZONTAL;
    const context = FORM_CONTEXT.useFormContextProvider(catalog);

    function handleSubmit(event: any) {
        context.submit();
        event.preventDefault(); // avoid redirection
        console.log(`Submit data: ${JSON.stringify(context.data)}`);
    }
    return (
        <>
            <h2>Your catalog of fields (INPUT):</h2>
            <p>{JSON.stringify(MOCK_FORM_NESTED_HORIZONTAL)}</p>

            <h2>How React Form Factory handle data (OUTPUT):</h2>
            <p>
                <i>(Try playing with fields and see how it changed)</i>
            </p>
            <p>{JSON.stringify(context.data)}</p>

            <h2>React Form Factory visual result:</h2>
            <form onSubmit={handleSubmit}>
                <FormFactoryComponent context={context}></FormFactoryComponent>
                <button disabled={context.shouldDisableSubmit()} type="submit">
                    Submit
                </button>
            </form>
        </>
    )
}