(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{568:function(e,t,o){e.exports=o.p+"assets/img/workflow.9d8e7259.png"},569:function(e,t,o){e.exports=o.p+"assets/img/Nextcloud_node.78117401.png"},570:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.3032602e.png"},571:function(e,t,o){e.exports=o.p+"assets/img/Nextcloud1_node.72b1fce2.png"},572:function(e,t,o){e.exports=o.p+"assets/img/Nextcloud2_node.905bae0f.png"},835:function(e,t,o){"use strict";o.r(t);var l=o(26),n=Object(l.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"nextcloud"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud"}},[e._v("#")]),e._v(" Nextcloud")]),e._v(" "),l("p",[l("a",{attrs:{href:"https://nextcloud.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nextcloud"),l("OutboundLink")],1),e._v(" is a free and open-source suite of client-server software for creating and using file hosting services.")]),e._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),l("p",[e._v("You can find authentication information for this node "),l("RouterLink",{attrs:{to:"/nodes/credentials/Nextcloud/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),l("h2",{attrs:{id:"basic-operations"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),l("ul",[l("li",[e._v("File\n"),l("ul",[l("li",[e._v("Copy a file")]),e._v(" "),l("li",[e._v("Delete a file")]),e._v(" "),l("li",[e._v("Download a file")]),e._v(" "),l("li",[e._v("Move a file")]),e._v(" "),l("li",[e._v("Upload a file")])])]),e._v(" "),l("li",[e._v("Folder\n"),l("ul",[l("li",[e._v("Copy a folder")]),e._v(" "),l("li",[e._v("Create a folder")]),e._v(" "),l("li",[e._v("Delete a folder")]),e._v(" "),l("li",[e._v("Return the contents of a folder")]),e._v(" "),l("li",[e._v("Move a folder")])])])]),e._v(" "),l("h2",{attrs:{id:"example-usage"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),l("p",[e._v("This workflow allows you to create a folder in Nextcloud, upload a file into that folder, and list the contents of the folder. You can also find the "),l("a",{attrs:{href:"https://n8n.io/workflows/620",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),l("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),l("ul",[l("li",[l("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),l("li",[l("a",{attrs:{href:""}},[e._v("Nextcloud")])]),e._v(" "),l("li",[l("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1)]),e._v(" "),l("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),l("p",[l("img",{attrs:{src:o(568),alt:"A workflow with the Nextcloud node"}})]),e._v(" "),l("h3",{attrs:{id:"_1-start-node"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),l("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),l("h3",{attrs:{id:"_2-nextcloud-node-create-folder"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-nextcloud-node-create-folder"}},[e._v("#")]),e._v(" 2. Nextcloud node (create: folder)")]),e._v(" "),l("ol",[l("li",[e._v("First of all, you'll have to enter credentials for the Nextcloud node. You can find out how to do that "),l("RouterLink",{attrs:{to:"/nodes/credentials/Nextcloud/"}},[e._v("here")]),e._v(".")],1),e._v(" "),l("li",[e._v("Select the 'Folder' option from the "),l("em",[l("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),l("li",[e._v("Enter a folder name in the "),l("em",[l("strong",[e._v("Folder")])]),e._v(" field.")]),e._v(" "),l("li",[e._v("Click on "),l("em",[l("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),l("p",[l("img",{attrs:{src:o(569),alt:"Create a folder in Nextcloud using the Nextcloud node"}})]),e._v(" "),l("h3",{attrs:{id:"_3-http-request-node-get"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-request-node-get"}},[e._v("#")]),e._v(" 3. HTTP Request node (GET)")]),e._v(" "),l("ol",[l("li",[e._v("Enter "),l("code",[e._v("https://n8n.io/n8n-logo.png")]),e._v(" in the "),l("em",[l("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),l("li",[e._v("Select 'File' from the "),l("em",[l("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),l("li",[e._v("Click on "),l("em",[l("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),l("p",[l("img",{attrs:{src:o(570),alt:"Get a file to upload in Nextcloud using the HTTP Request node"}})]),e._v(" "),l("h3",{attrs:{id:"_4-nextcloud1-node-upload-file"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-nextcloud1-node-upload-file"}},[e._v("#")]),e._v(" 4. Nextcloud1 node (upload: file)")]),e._v(" "),l("ol",[l("li",[e._v("Select the credentials that you entered in the Nextcloud node.")]),e._v(" "),l("li",[e._v("Enter the path of the Nextcloud folder you created in the previous steps along with a file name in the "),l("em",[l("strong",[e._v("File Path")])]),e._v(" field.")]),e._v(" "),l("li",[e._v("Set the "),l("em",[l("strong",[e._v("Binary Data")])]),e._v(" toggle to true.")]),e._v(" "),l("li",[e._v("Click on "),l("em",[l("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),l("p",[l("img",{attrs:{src:o(571),alt:"Upload a file in Nextcloud using the Nextcloud node"}})]),e._v(" "),l("h3",{attrs:{id:"_5-nextcloud2-node-list-folder"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-nextcloud2-node-list-folder"}},[e._v("#")]),e._v(" 5. Nextcloud2 node (list: folder)")]),e._v(" "),l("ol",[l("li",[e._v("Select the credentials that you entered in the Nextcloud node.")]),e._v(" "),l("li",[e._v("Select 'Folder' from the "),l("em",[l("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),l("li",[e._v("Select 'List' from the "),l("em",[l("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),l("li",[e._v("Enter the name of the Nextcloud folder you created in the previous steps in the "),l("em",[l("strong",[e._v("Folder Path")])]),e._v(" field.")]),e._v(" "),l("li",[e._v("Click on "),l("em",[l("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),l("p",[l("img",{attrs:{src:o(572),alt:"List the contents of a Nextcloud folder using the Nextcloud node"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);