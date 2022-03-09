const component = {
    description: "⚛ react component",
    prompts: [
        {
            type: "input",
            name: "appName",
            message: "app name",
        },
        {
            type: "input",
            name: "name",
            message: "component name"
        }
    ],
    actions: [
        {
            type: "addMany",
            destination: "src/components/{{ appName }}",
            templateFiles: `./templates/*.hbs`,
            verbose: true,
        },
        {
            type: "add",
            path: "src/components/{{ appName }}/Layout.tsx",
            templateFile: "./templates/container.hbs",
        }
    ],
}

export default component
