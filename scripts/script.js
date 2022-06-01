// initialize vue app
var app = new Vue({
    el: '#app',
    data: {
        // set default values
        currentPage: 'home',
        currentPageTitle: "Omar dios del diseño",
        currentPageSubtitle: '',
        currentPageContent: ''
    },
    methods: {
        // set page content
        setPageContent: function(page) {
            // set page content
            this.currentPageContent = page;
        }
    }
});

