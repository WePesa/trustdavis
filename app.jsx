/** @jsx React.DOM */

var React = require("react");
var Fluxxor = require("fluxxor");
var Router = require("react-router");

/* global window */
// expost React globally for DevTools
window.React = React;

var TrustDavisApp = require("./components/TrustDavisApp");
var Placeholder = require("./components/Placeholder");

var TradeStore = require("./stores/TradeStore");
var TradeActions = require("./actions/TradeActions");
var Trades = require("./components/Trades");
var TradeDetails = require("./components/TradeDetails");

var References = require("./components/References");
var ReferenceStore = require("./stores/ReferenceStore");
var ReferenceActions = require("./actions/ReferenceActions");

var Contacts = require("./components/Contacts");
var ContactDetails = require("./components/ContactDetails");
var ContactStore = require("./stores/ContactStore");
var ContactActions = require("./actions/ContactActions");

var UserStore = require("./stores/UserStore");
var UserActions = require("./actions/UserActions");

// TODO mock data
var fixtures = require("./fixtures");

var Firebase = require("Firebase");
var FirebaseClient = require("./clients/FirebaseClient");

// Load jQuery and bootstrap
var jQuery = require("jquery");
window.jQuery = jQuery;
require("bootstrap/dist/js/bootstrap.js");
require("./css/style.css");

var Route = Router.Route;
var Routes = Router.Routes;
var Redirect = Router.Redirect;

var stores = {
  TradeStore: new TradeStore({trades: fixtures.trades}),
  ReferenceStore: new ReferenceStore({references: fixtures.referencesList}),
  ContactStore: new ContactStore(),
  UserStore: new UserStore({user: fixtures.user})
};

var firebaseUrl = "https://flickering-heat-4989.firebaseio.com/";
var firebaseRef = new Firebase(firebaseUrl);
var client = new FirebaseClient(firebaseRef);

var actions = {
    trade: TradeActions,
    reference: ReferenceActions,
    contact: new ContactActions(client),
    user: new UserActions(client)
};

var flux = new Fluxxor.Flux(stores, actions);

var routes = (
    <Routes>
        <Route handler={TrustDavisApp} flux={flux}>
            <Redirect from="/" to="trades" />
            <Route name="trades" path="/trades" handler={Trades} flux={flux} />
            <Route name="tradeDetails" path="/trade/:tradeId" handler={TradeDetails} flux={flux} />
            <Route name="references" path="/references" handler={References} flux={flux} />
            <Route name="contacts" path="/contacts" handler={Contacts} flux={flux} />
            <Route name="contactDetails" path="/contact/:contactId" handler={ContactDetails} flux={flux} />
            <Route name="notfound" path="/notfound" handler={Placeholder} title="Contact or Trade ID not found" flux={flux} />
        </Route>
    </Routes>
);

/* global document */
React.renderComponent(routes, document.getElementById("app"));
