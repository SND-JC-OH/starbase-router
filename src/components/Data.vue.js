const template = `
<div class="row">
    <item 
        v-for="(item, seq) in items" 
        v-bind:passed-item="item" 
        v-bind:type="type"
        v-bind:key="seq" />
</div>
`
import Item from './Item.vue.js'

export default {
    template: template,
    components: {
        item: Item
    },
    data() {
        return {
            type: this.$route.params.type,
            items: [],
        }
    },
    watch: {
        '$route': 'fetchItems'
    },
    created() {
        this.fetchItems()
    },
    methods: {
        fetchItems() {
            this.type = this.$route.params.type
            this.items = []
            let initial_ids = [1, 13, 14]

            for (let i in initial_ids) {
                
                let id = initial_ids[i]
                console.log('id', id)
                fetch(`http://swapi.dev/api/${this.type}/${id}`, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json => this.items.push(json))
            }
        }
    }
}