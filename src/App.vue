<template>
  <!-- Main APP -->
  <v-app>

    <!-- Dialog Alert -->
    <v-dialog v-model="alert_value.show" max-width="400px" max-height="50px">
      <v-card dark max-width="400px">
        <v-toolbar :color="alert_value.type != 'success' ? colors.ORANGE_1 : colors.GREEN_1">

          <!-- Side icon -->
          <v-icon> 
            {{ icons.ALERT }} 
          </v-icon>

          <!-- Alert text -->
          <v-toolbar-title class="center-content">
            {{ alert_value.text }}
          </v-toolbar-title>

          <!-- Button -->
          <v-btn icon @click="close_alert()">
            <v-icon>
              {{ icons.CLOSE }}
            </v-icon>
          </v-btn>

        </v-toolbar>
      </v-card>
    </v-dialog>

    <!-- Main App Bar -->
    <v-app-bar max-height="75px" :color="colors.GREEN_3" dark>
      
      <!-- Nav Icon - Options -->
      <v-app-bar-nav-icon @click="show_sidebar()"></v-app-bar-nav-icon>

      <!-- Toolbar Title -->
      <v-toolbar-title>{{ page_title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-switch v-model="english_mode" :label="switch_label" @change="change_switch(english_mode)"></v-switch>

    </v-app-bar>

    <!-- Navigation Drawer - Side Options -->
    <v-navigation-drawer v-model="sidebar" absolute temporary :color="colors.GRAY_1" dark>
      <v-list nav dense>

        <!-- GitHub -->
        <v-list-item @click="open_git">
          <!-- icon -->
          <v-list-item-icon>
            <v-icon>
              {{ icons.GIT }}
            </v-icon>
          </v-list-item-icon>
          <!-- title -->
          <v-list-item-title>
            {{ titles.NAVBAR.GIT }}
          </v-list-item-title>
        </v-list-item>

        <!-- Mail -->
        <v-list-item @click="mail_me()">

          <v-list-item-icon>
            <v-icon>
              {{ icons.MAIL }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-title>
            {{ titles.NAVBAR.MAIL }}
          </v-list-item-title>
        </v-list-item>

        <!-- Close -->
        <v-list-item @click="hide_sidebar()">

          <v-list-item-icon>
            <v-icon>
              {{ icons.CLOSE }}
            </v-icon>
          </v-list-item-icon>
          
          <v-list-item-title>
            {{ navbar_close }}
          </v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- Main App Content -->
    <v-main>
      <v-container>
        <v-row>
          
          <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
            <v-img src="./assets/quote-gen-logo.png" width="300px"></v-img>
          </v-col>
          
          <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">

            <v-card max-width="750px" class="rounded-xl">

              <!-- Card Toolbar -->
              <v-toolbar :color="colors.GREEN_2">
                <v-toolbar-title class="center-content">
                  {{ card_title }}
                </v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form ref="citeGeneratorForm">
                  <v-container>
                    <v-row>

                      <!-- Form init text -->
                      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="justify">
                        {{ main_form_text }}
                      </v-col>

                      <!-- Text Type (Book/Article) -->
                      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" justify="center" class="center-content">
                        <v-switch  v-model="citation_type" @change="change_text_type(citation_type)" :label="type_text_label" :color="colors.GREEN_2"></v-switch>
                      </v-col>

                      <!-- VariableName -->
                      <v-col cols="12" xs="3" sm="3" md="3" lg="3" xl="3">
                        <v-text-field :label="labels.VARIABLE" filled rounded v-model="newCitation.variable" :color="colors.GREEN_2" :rules="identifier_rule"></v-text-field>
                      </v-col>

                      <!-- Title -->
                      <v-col cols="12" xs="9" sm="9" md="9" lg="9" xl="9">
                        <v-text-field :label="labels.TITLE" filled rounded v-model="newCitation.title" :color="colors.GREEN_2" :rules="required_rule"></v-text-field>
                      </v-col>

                      <!-- Author(s) -->
                      <v-col cols="12" xs="10" sm="10" md="10" lg="10" xl="10">
                        <v-text-field :label="labels.AUTHOR" filled rounded v-model="newCitation.author" :color="colors.GREEN_2" :rules="required_rule"></v-text-field>
                      </v-col>

                      <!-- Add More Authors -->
                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2">
                        <v-btn icon :color="colors.GREEN_1" @click="author.show_2 = true">
                          <v-icon>
                            {{ icons.ADD }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <!-- Author(s) -->
                      <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8" v-show="author.show_2">
                        <v-text-field :label="labels.AUTHOR" filled rounded v-model="newCitation.author_2" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_2">
                        <v-btn icon :color="colors.GREEN_1" @click="author.show_3 = true">
                          <v-icon>
                            {{ icons.ADD }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_2">
                        <v-btn icon :color="colors.ORANGE_1" @click="author.show_2 = false">
                          <v-icon>
                            {{ icons.CLOSE }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <!-- Author(s) -->
                      <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8" v-show="author.show_3">
                        <v-text-field :label="labels.AUTHOR" filled rounded v-model="newCitation.author_3" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_3">
                        <v-btn icon :color="colors.GREEN_1" @click="author.show_4 = true">
                          <v-icon>
                            {{ icons.ADD }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_3">
                        <v-btn icon :color="colors.ORANGE_1" @click="author.show_3 = false">
                          <v-icon>
                            {{ icons.CLOSE }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <!-- Author(s) -->
                      <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8" v-show="author.show_4">
                        <v-text-field :label="labels.AUTHOR" filled rounded v-model="newCitation.author_4" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_4">
                        <v-btn icon :color="colors.GREEN_1" @click="author.show_5 = true">
                          <v-icon>
                            {{ icons.ADD }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_4">
                        <v-btn icon :color="colors.ORANGE_1" @click="author.show_4 = false">
                          <v-icon>
                            {{ icons.CLOSE }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <!-- Author(s) -->
                      <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8" v-show="author.show_5">
                        <v-text-field :label="labels.AUTHOR" filled rounded v-model="newCitation.author_5" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_5">
                        <v-btn icon :color="colors.GREEN_1" @click="author.show_6 = true">
                          <v-icon>
                            {{ icons.ADD }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_5">
                        <v-btn icon :color="colors.ORANGE_1" @click="author.show_5 = false">
                          <v-icon>
                            {{ icons.CLOSE }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <!-- Author(s) -->
                      <v-col cols="12" xs="10" sm="10" md="8" lg="10" xl="10" v-show="author.show_6">
                        <v-text-field :label="labels.AUTHOR" filled rounded v-model="newCitation.author_6" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <!-- Close -->
                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" v-show="author.show_6">
                        <v-btn icon :color="colors.ORANGE_1" @click="author.show_6 = false">
                          <v-icon>
                            {{ icons.CLOSE }}
                          </v-icon>
                        </v-btn>
                      </v-col>

                      <!-- Year -->
                      <v-col cols="12" :xs="citation_type == true? 12 : 4" :sm="citation_type == true? 12 : 4" :md="citation_type == true? 12 : 4" :lg="citation_type == true? 12 : 4" :xl="citation_type == true? 12 : 4">
                        <v-text-field :label="labels.YEAR" v-mask="['####']" filled rounded v-model="newCitation.year" :color="colors.GREEN_2" :rules="required_rule"></v-text-field>
                      </v-col>

                      <!-- Edition -->
                      <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4" v-show="!citation_type">
                        <v-text-field :label="labels.EDITION" v-mask="['##']" filled rounded v-model="newCitation.edition" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <!-- Volume -->
                      <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4" v-show="!citation_type">
                        <v-text-field :label="labels.VOLUME" v-mask="['##']" filled rounded v-model="newCitation.volume" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <!-- Publisher -->
                      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" v-show="!citation_type">
                        <v-text-field :label="labels.PUBLISHER" filled rounded v-model="newCitation.publisher" :color="colors.GREEN_2"
                        :rules="citation_type == false ? required_rule : [] "></v-text-field>
                      </v-col>

                      <!-- Journal -->
                      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" v-show="citation_type">
                        <v-text-field :label="labels.JOURNAL" filled rounded v-model="newCitation.journal" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <!-- City -->
                      <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
                        <v-text-field :label="labels.ADDRESS.CITY" filled rounded v-model="newCitation.address.city" :color="colors.GREEN_2" :rules="required_rule"></v-text-field>
                      </v-col>

                      <!-- State -->
                      <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                        <v-text-field :label="labels.ADDRESS.STATE" v-mask="['AA']" filled rounded v-model="newCitation.address.state" :color="colors.GREEN_2" :rules="required_rule"></v-text-field>
                      </v-col>

                      <!-- Url -->
                      <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
                        <v-text-field :label="labels.URL" filled rounded v-model="newCitation.url" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <!-- Access Date -->
                      <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                        <v-text-field :label="labels.ACCESS_DATE" v-mask="['##/##/####']" filled rounded v-model="newCitation.access_date" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <!-- Actions -->
                      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                        
                        <!-- Submit -->
                        <v-btn rounded :color="colors.GREEN_1" class="actions-spacer" @click="submit()">
                          {{ submit_button }}
                        </v-btn>

                        <!-- Reset -->
                        <v-btn rounded :color="colors.GREEN_2" class="actions-spacer" @click="reset()">
                          {{ reset_button }}
                        </v-btn>

                      </v-col>

                      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" v-show="show_result">
                        <v-textarea v-model="result" filled rounded readonly id="result_text"></v-textarea>
                      </v-col>

                      <!-- Copy to Clipboard -->
                      <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" align="center" v-show="show_result">
                        <v-btn rounded :color="colors.GREEN_1" class="actions-spacer" @click="clipboard_copy()">
                          {{ copy_button }}
                        </v-btn>
                      </v-col>

                      <!-- Save File -->
                      <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" align="center" v-show="show_result">
                        <v-btn rounded :color="colors.GREEN_2" class="actions-spacer" @click="save_file()">
                          {{ save_button }}
                        </v-btn>
                      </v-col>

                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>

            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
//Config file import.
import config from './config/config.json'

export default{
  data(){
    return{

      //Map of months - iterable.
      months:[ 
        ["01","Jan."], 
        ["02","Fev."], 
        ["03","Mar."], 
        ["04","Abr."], 
        ["05","Mai."], 
        ["06","Jun."], 
        ["07","Jul."], 
        ["08","Ago."], 
        ["09","Set."], 
        ["10","Out."], 
        ["11","Nov."], 
        ["12","Dez."],
      ],

      //Show citation result
      show_result: false,
      result: '',

      //Citation variable
      newCitation: {
        variable: '',
        type: '',
        title: '',
        author: '',
        author_2: '',
        author_3: '',
        author_4: '',
        author_5: '',
        author_6: '',
        year: '',
        edition: '',
        number: '',
        volume: '',
        publisher: '',
        journal: '',
        address: {
          city: '',
          state: '',
        },
        url: '',
        access_date: '',
      },

      //Sidebar show.
      sidebar: false,

      //More Authors
      author: {
        show_2: false,
        show_3: false,
        show_4: false,
        show_5: false,
        show_6: false,
      },

      //Colors - load from config file.
      colors: config.COLORS,

      //Items - load from config file.
      icons: config.ICONS,

      //Titles - load from config file.
      titles: config.TITLES,

      //GitHub page.
      git: config.LINKS.GIT,

      //Variable to change page language.
      english_mode: false,

      //Variable to change text citation type (T - Article / F - book).
      citation_type: false,
      type_text_label: config.LABELS.TYPE.BOOK_PT,

      /* CHANGE VALUES - SWITCH */
      page_title: config.TITLES.TOPBAR_PT,
      switch_label: config.LABELS.SWITCH_PT,
      card_title: config.TITLES.CARD_PT,
      navbar_close: config.TITLES.NAVBAR.CLOSE_PT,
      main_form_text: config.TEXT.MAIN_CARD_PT,
      labels: config.FORM_LABELS_PT,

      submit_button: config.BUTTONS.PT.SUBMIT,
      reset_button: config.BUTTONS.PT.CLEAR,
      copy_button: config.BUTTONS.PT.COPY,
      save_button: config.BUTTONS.PT.SAVE,
      required_text: config.RULES.REQUIRED_PT,
      identifier_text: config.RULES.IDENTIFIER_PT,

      //Mandatory fields rule.
      required_rule: [
        v => !!v || this.required_text,
      ],

      //Identifier dule.
      identifier_rule: [
        v => !!v || this.required_text,
        v => /^[$A-Z_][0-9A-Z_$]*$/i.test(v) || this.identifier_text,
      ],

      //Timeout
      timeout: config.TIMEOUT,

      //Alert config options.
      alerts: config.ALERT,

      //Alert mnipulation variable
      alert_value: {
        show: false,
        type: config.ALERT.TYPE.SUCCESS,
        text: '',
      },

    }
  },

  methods: {

    //Opens alert dialog.
    open_alert(type, text){
      this.alert_value.show = true;
      this.alert_value.type = type;
      this.alert_value.text = text;
    },

    //Closes alert dialog.
    close_alert(){
      this.alert_value.show = false;
    },

    //Enable/Disable english mode.
    change_switch(switch_value){
      switch_value == true ? this.english() : this.portuguese();
    },

    //Change type text value and labels.
    change_text_type(switch_value){

      switch(this.english_mode){
        case true:
          switch_value == true ? this.type_text_label = config.LABELS.TYPE.ARTICLE_EN : this.type_text_label = config.LABELS.TYPE.BOOK_EN;
          this.newCitation.type = "@article";
          break;
        case false:
          switch_value == true ? this.type_text_label = config.LABELS.TYPE.ARTICLE_PT : this.type_text_label = config.LABELS.TYPE.BOOK_PT;
          this.newCitation.type = "@book";
          break;
      }
    },

    portuguese(){

      this.citation_type == true ? this.type_text_label = config.LABELS.TYPE.ARTICLE_PT : this.type_text_label = config.LABELS.TYPE.BOOK_PT;

      this.page_title = config.TITLES.TOPBAR_PT;
      this.switch_label = config.LABELS.SWITCH_PT;
      this.card_title = config.TITLES.CARD_PT;
      this.navbar_close = config.TITLES.NAVBAR.CLOSE_PT;
      this.main_form_text = config.TEXT.MAIN_CARD_PT;
      this.labels = config.FORM_LABELS_PT;

      this.submit_button = config.BUTTONS.PT.SUBMIT;
      this.reset_button = config.BUTTONS.PT.CLEAR;
      this.copy_button = config.BUTTONS.PT.COPY;
      this.save_button = config.BUTTONS.PT.SAVE;
      this.required_text = config.RULES.REQUIRED_PT;
      this.identifier_text = config.RULES.IDENTIFIER_PT;
    },

    english(){

      this.citation_type == true ? this.type_text_label = config.LABELS.TYPE.ARTICLE_EN : this.type_text_label = config.LABELS.TYPE.BOOK_EN;

      this.page_title = config.TITLES.TOPBAR_EN;
      this.switch_label = config.LABELS.SWITCH_EN;
      this.card_title = config.TITLES.CARD_EN;
      this.navbar_close = config.TITLES.NAVBAR.CLOSE_EN;
      this.main_form_text = config.TEXT.MAIN_CARD_EN;
      this.labels = config.FORM_LABELS_EN;

      this.submit_button = config.BUTTONS.EN.SUBMIT;
      this.reset_button = config.BUTTONS.EN.CLEAR;
      this.copy_button = config.BUTTONS.EN.COPY;
      this.save_button = config.BUTTONS.EN.SAVE,
      this.required_text = config.RULES.REQUIRED_EN;
      this.identifier_text = config.RULES.IDENTIFIER_EN;
    },

    //Changes sidebar visibility
    show_sidebar(){
      this.sidebar = true;
    },

    //Hides sidebar
    hide_sidebar(){
      this.sidebar = false;
    },

    //Open GitHub page on another tab
    open_git(){
      window.open(this.git);
    },

    //Opens email editor to mail me
    mail_me(){
      window.location.href = 'mailto:abrandtfrancisco@gmail.com';
    },

    //Process Multiple Authors
    get_authors(){

      let author_string = this.newCitation.author;

      if(this.author.show_2) author_string = author_string + ' and ' + this.newCitation.author_2;
      if(this.author.show_3) author_string = author_string + ' and ' + this.newCitation.author_3;
      if(this.author.show_4) author_string = author_string + ' and ' + this.newCitation.author_4;
      if(this.author.show_5) author_string = author_string + ' and ' + this.newCitation.author_5;
      if(this.author.show_6) author_string = author_string + ' and ' + this.newCitation.author_6;

      return author_string;

    },

    //Method to generate citation
    generate(){

      let authors = this.get_authors();

      //Ket map via iterable.
      let month_map = new Map(this.months);

      let month = '';
      let day = '';
      let year = '';

      //Date format.
      if(this.newCitation.access_date){
        year = this.newCitation.access_date.substring(6,10);
        month = this.newCitation.access_date.substring(3,5);
        month = month_map.get(month);
        day = this.newCitation.access_date.substring(0,2);
      }

      //Format date
      let date = day + ' de ' + month + ' ' + year;

      //Mount citation
      let citation_value = `@${this.citation_type == true ? 'article' : 'book'}{${this.newCitation.variable},${'\n'}    Title={${this.newCitation.title}},${'\n'}    Author={${authors}},${'\n'}    Year={${this.newCitation.year}},${'\n'}    Edition={${this.newCitation.edition}},${'\n'}    Number={${this.newCitation.number}},${'\n'}    Volume={${this.newCitation.volume}},${'\n'}    Publisher={${this.newCitation.publisher}},${'\n'}    Journal={${this.newCitation.journal}},${'\n'}    Address={${this.newCitation.address.city} - ${this.newCitation.address.state}},${'\n'}    Url={${this.newCitation.url}},${'\n'}    Urlaccessdate={${date}},${'\n'}}`

      citation_value = citation_value.replace(/null/g, '');

      return citation_value;
    },

    //Reset form method.
    reset(){
      this.show_result = false;
      this.$refs.citeGeneratorForm.reset();
      this.result = '';
    },

    submit(){

      if(this.$refs.citeGeneratorForm.validate()){
        this.result = this.generate();
        this.show_result = true;
      } else {
        this.english_mode ? this.open_alert(config.ALERT.TYPE.WARNING, config.ALERT.TEXT.FORM_EN) : this.open_alert(config.ALERT.TYPE.WARNING, config.ALERT.TEXT.FORM_PT)
      }
      
    },

    //Copy the result to clipboard.
    clipboard_copy(){
      let text_copy = document.getElementById("result_text");
      text_copy.select();
      text_copy.setSelectionRange(0, 99999);
      document.execCommand("copy");

      let text = this.english_mode ? config.ALERT.TEXT.COPIED_EN : config.ALERT.TEXT.COPIED_PT;

      this.open_alert(config.ALERT.TYPE.SUCCESS, text);
    },

    //Save to `.bib` file.
    save_file(){
      var FileSaver = require('file-saver');
      let result = this.generate();
      var blob = new Blob([result], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, "citation.bib");
    },

  },

}
</script>


<style>

.center-content{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.actions-spacer{
  margin-left: 10px;
  margin-right: 10px;
}

</style>