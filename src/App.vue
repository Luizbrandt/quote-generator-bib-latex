<template>
  <!-- Main APP -->
  <v-app>

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
            <v-img src="./assets/quote-gen-logo.png" width="200px"></v-img>
          </v-col>
          
          <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">

            <v-card max-width="750px" class="rounded-xl">

              <!-- Card Toolbar -->
              <v-toolbar>
                <v-toolbar-title class="center-content">
                  {{ card_title }}
                </v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-container>
                    <v-row>

                      <!-- Form init text -->
                      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="justify">
                        {{ main_form_text }}
                      </v-col>

                      <!-- Title -->
                      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                        <v-text-field :label="labels.TITLE" filled rounded v-model="newCitation.title" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <!-- Author(s) -->
                      <v-col cols="12" xs="10" sm="10" md="10" lg="10" xl="10">
                        <v-text-field :label="labels.AUTHOR" filled rounded v-model="newCitation.author" :color="colors.GREEN_2"></v-text-field>
                      </v-col>

                      <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2">
                        <v-btn icon :color="colors.GREEN_1">
                          <v-icon>
                            mdi-plus
                          </v-icon>
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
import config from './config/config.json'

export default{
  data(){
    return{

      newCitation: {
        title: '',
        author: '',
        year: '',
        edition: '',
        number: '',
        volume: '',
        publisher: '',
        journal: '',
        address: '',
        url: '',
        access_date: '',
      },

      sidebar: false,

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

      /* CHANGE VALUES - SWITCH */
      page_title: config.TITLES.TOPBAR_PT,
      switch_label: config.LABELS.SWITCH_PT,
      card_title: config.TITLES.CARD_PT,
      navbar_close: config.TITLES.NAVBAR.CLOSE_PT,
      main_form_text: config.TEXT.MAIN_CARD_PT,
      labels: config.FORM_LABELS_PT,

    }
  },

  methods: {

    change_switch(switch_value){
      switch_value == true ? this.english() : this.portuguese();
    },

    portuguese(){
      this.page_title = config.TITLES.TOPBAR_PT;
      this.switch_label = config.LABELS.SWITCH_PT;
      this.card_title = config.TITLES.CARD_PT;
      this.navbar_close = config.TITLES.NAVBAR.CLOSE_PT;
      this.main_form_text = config.TEXT.MAIN_CARD_PT;
      this.labels = config.FORM_LABELS_PT;
    },

    english(){
      this.page_title = config.TITLES.TOPBAR_EN;
      this.switch_label = config.LABELS.SWITCH_EN;
      this.card_title = config.TITLES.CARD_EN;
      this.navbar_close = config.TITLES.NAVBAR.CLOSE_EN;
      this.main_form_text = config.TEXT.MAIN_CARD_EN;
      this.labels = config.FORM_LABELS_EN;
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

    //Method to generate citation
    generate(){
      return `${'/n'}`
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

</style>