import type { FederationRuntimePlugin } from '@module-federation/enhanced/runtime';
import { RemoteWithEntry } from '@module-federation/sdk/.';



const runtimePlugin: () => FederationRuntimePlugin = function () {
    return {
        name: 'my-runtime-plugin',
        async beforePreloadRemote(args) {
            const scope = args.preloadOps[0].nameOrAlias;

            const remote = args.options.remotes.find(
                (r) => r.name === scope
            );

            (remote as RemoteWithEntry).entry =
                'http://localhost:3200/_next/static/chunks/mf-manifest.json';
            // console.log(args);

            return;
        },
        async beforeRequest({ id, options, origin }) {
            const [scope] = id.split('/');

            const remote = origin.options.remotes.find((r) => r.name === scope);


            (remote as RemoteWithEntry).entry =
                'http://localhost:3200/_next/static/chunks/mf-manifest.json';

            return { id, options, origin };
        },
    };
};
export default runtimePlugin;
