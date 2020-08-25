(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{576:function(e,t,n){e.exports=n.p+"assets/img/workflow.40b04917.png"},577:function(e,t,n){e.exports=n.p+"assets/img/PagerDuty_node.ec66a94a.png"},578:function(e,t,n){e.exports=n.p+"assets/img/PagerDuty1_node.beaab021.png"},579:function(e,t,n){e.exports=n.p+"assets/img/PagerDuty2_node.cc44ff91.png"},839:function(e,t,n){"use strict";n.r(t);var o=n(26),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"pagerduty"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pagerduty"}},[e._v("#")]),e._v(" PagerDuty")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.pagerduty.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PagerDuty"),o("OutboundLink")],1),e._v(" is a cloud computing company that produces a SaaS incident response platform for IT departments.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/PagerDuty/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("ul",[o("li",[e._v("Incident\n"),o("ul",[o("li",[e._v("Create an incident")]),e._v(" "),o("li",[e._v("Get an incident")]),e._v(" "),o("li",[e._v("Get all incidents")]),e._v(" "),o("li",[e._v("Update an incident")])])]),e._v(" "),o("li",[e._v("Incident Note\n"),o("ul",[o("li",[e._v("Create an incident note")]),e._v(" "),o("li",[e._v("Get all incident's notes")])])]),e._v(" "),o("li",[e._v("Log Entry\n"),o("ul",[o("li",[e._v("Get a log entry")]),e._v(" "),o("li",[e._v("Get all log entries")])])]),e._v(" "),o("li",[e._v("User\n"),o("ul",[o("li",[e._v("Get a user")])])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to create, update, and get an incident on PagerDuty. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/411",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("PagerDuty")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(576),alt:"A workflow with the PagerDuty node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-pagerduty-node-create-incident"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-pagerduty-node-create-incident"}},[e._v("#")]),e._v(" 2. PagerDuty node (create: incident)")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the PagerDuty node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/PagerDuty/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Enter the title of the incident in the "),o("em",[o("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Select the "),o("em",[o("strong",[e._v("Service ID")])]),e._v(" from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter your email in the "),o("em",[o("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:n(577),alt:"Using the PagerDuty node to create an incident"}})]),e._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_3-pagerduty1-node-update-incident"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-pagerduty1-node-update-incident"}},[e._v("#")]),e._v(" 3. PagerDuty1 node (update: incident)")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Update' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Incident ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > PagerDuty > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["PagerDuty"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Email")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > PagerDuty > Parameters > email. You can also add the following expression: "),o("code",[e._v('{{$node["PagerDuty"].parameter["email"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Field")])]),e._v(" button and click on "),o("em",[o("strong",[e._v("Title")])]),e._v(".")]),e._v(" "),o("li",[e._v("Enter the name of the updated title in the "),o("em",[o("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[o("img",{attrs:{src:n(578),alt:"Using the PagerDuty node to update an incident"}})]),e._v(" "),o("div",{pre:!0},[o("h3",{pre:!0,attrs:{id:"_4-pagerduty2-node-get-incident"}},[o("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-pagerduty2-node-get-incident"}},[e._v("#")]),e._v(" 4. PagerDuty2 node (get: incident)")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Get' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Incident ID")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > PagerDuty > Output Data > JSON > id. You can also add the following expression: "),o("code",[e._v('{{$node["PagerDuty"].json["id"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[o("img",{attrs:{src:n(579),alt:"Using the PagerDuty node to get an incident"}})]),e._v(" "),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/creating-custom-incident-response-workflows-with-n8n-9baef0bbedb9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Custom Incident Response Workflows with n8n 🚨"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);