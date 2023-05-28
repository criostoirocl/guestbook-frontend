<template>
  <div class="hello">
    <v-container>
      <div class="v-row">
        <div class="v-col">
          <h1>Guestbook</h1>
          <br>
        </div>
      </div>
      <div class="v-row">
        <div class="v-col">
          <v-card>
            <v-card-text>
              <v-textarea placeholder="Enter your comment here" v-model="form.comment"></v-textarea>
              <br>
              <v-btn @click="saveComment">Save Comment</v-btn>
            </v-card-text>
          </v-card>
        </div>
      </div>
      <div class="v-row">
        <div class="v-col">
          <v-list>
            <v-list-item v-for="(comment, index) in comments">{{ comment.comment }}  {{ comment.createdAt }}</v-list-item>
          </v-list>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){

    let url = window.location.host;

    let env = "";
    for(let envName of ["qa", "uat", "preprod", "prod"]){
      if(url.indexOf(envName) === 0){
        env = envName
      }
    }

    url = env? "http://" + env + "-guestbookbackend.devbop.com/": "http://localhost:8080/";

    return {
      url: url,
      form: {
        comment: null,
      },
      comments: []
    }
  },
  methods: {
    async getComments(){
      let resp = await axios.get(this.url + "comment")
      this.comments = resp.data
    },
    async saveComment() {
      if(this.form.comment != null && this.form.comment != ""){
        let resp = await axios.post(this.url + "comment", this.form)
        await this.getComments()
        this.form.comment = null
      }
    }
  },
  created() {
    this.getComments()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
