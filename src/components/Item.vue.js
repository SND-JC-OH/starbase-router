const template = `
<div class="col-4">
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">{{item.name}}</h5>
        </div> 
        <div class="card-body">
            <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(value, key, seq) in item " v-bind:key="seq"><strong>{{key}}</strong>: {{value}}</li>
        </ul>
        <div class="card-footer">
            <!--<a href="#" class="card-link">Card link</a>-->
            <button class="btn btn-primary" v-on:click="switchItem">Switch Item</button>
        </div>
    </div>
</div>
`
export default {
    template: template,
    props: ['passedItem', 'type'],
    data() {
        return {
            item: {}
        }
    },
    created() {
        this.item = this.passedItem
    },
    methods: {
        switchItem() {
            let random_id = Math.floor(Math.random() * 63) + 1
            fetch(`http://swapi.dev/api/${this.type}/${random_id}`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => this.item = json)
        }
    }
}