import React from "react"
import { Switch, Route, Router } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"

import Landing from "./components/Landing"
import Pricing from "./components/Pricing"

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
    seed: (Math.random() + 1).toString(36).substring(7)
})

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}