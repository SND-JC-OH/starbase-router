const template = `
<div class="container">

    <div class="row">
        <div class="col">
        {{message}}
        <h4>
            <router-link class="link" to="/data/people">Meet the Characters</router-link> | 
            <router-link class="link" to="/data/planets">Exploer the Planets</router-link> 
        </h4>
        <router-view></router-view>
        </div>
    </div>
</div>
`

export default {
    name: 'app',
    template: template,
    data() {
        return {
            message: 'Starbase - Router'
        }
    }
}