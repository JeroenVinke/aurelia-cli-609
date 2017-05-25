export function configure(config) {
    const loader = config.aurelia.loader;
    loader.addPlugin('loader-plugin', {
        fetch(address) {
            console.log('should be called', address);
            return loader.loadModule(address.replace('.js', ''))
            .then(x => { console.log(x); return x });
        }
    })
}