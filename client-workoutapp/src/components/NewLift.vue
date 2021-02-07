<template>
  <div style="height: 100%">
    <div class="pa-6 teal--text text--darken-2 text-h5 d-inline-flex">
      New Lift Plan
    </div>
    <v-btn
      class="mr-5 mt-5 float-right"
      outlined
      large
      color="teal lighten-2"
      @click="save"
    >
      Save
    </v-btn>
    <v-divider dark></v-divider>

    <v-container>
      <v-text-field
        color="teal lighten-2"
        label="Plan Name"
        outlined
        dark
        v-model="plan.name"
      ></v-text-field>

      <v-simple-table class="blue lighten-2">
        <template>
          <thead v-if="plan.exercises.length > 0">
            <tr>
              <th class="text-left">
                Title
              </th>
              <th class="text-right">
                Sets
              </th>
              <th class="text-right">
                Details
              </th>
              <th class="text-right">
                <v-icon>
                  mdi-clipboard-edit-outline
                </v-icon>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(exer, index) in plan.exercises"
              :row="exer"
              :key="index"
            >
              <td>{{ exer.title }}</td>
              <td class="text-right">{{ exer.sets }}</td>
              <td class="text-right">{{ exer.details }}</td>
              <td class="text-right">
                <v-icon @click="deleteRow(index)" dense color="red darken-2">
                  mdi-trash-can-outline
                </v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <div class="pl-2 pt-6">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <!-- Dialog Btn -->
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="red lighten-2" large v-bind="attrs" v-on="on">
              Add <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <!-- Dialog box -->
          <v-card class="blue lighten-4">
            <v-card-title>
              <span class="headline">New Exercise</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" v-if="error">
                    <v-card class="pa-4 red lighten-2 yellow--text">
                      {{ error }}
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Lift*"
                      v-model="exercise.title"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      :items="[
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10+',
                      ]"
                      label="Sets*"
                      v-model="exercise.sets"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      outlined
                      label="Details"
                      v-model="exercise.details"
                    >
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red lighten-2" text @click="dialog = false"
                >Close</v-btn
              >
              <v-btn color="teal darken-2" text @click="add">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <v-alert class="pa-4 mt-6 red lighten-2 yellow--text" :value="alert">
        You can't save the workout until you add at least 1 exercise.
      </v-alert>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NewLift",
  components: {},
  data: () => ({
    plan: {
      name: "",
      exercises: [],
    },
    exercise: {
      id: null,
      title: "",
      sets: null,
      details: "",
    },
    count: 1,
    dialog: false,
    error: "",
    alert: false,
  }),
  methods: {
    reset: function() {
      this.exercise.id = null;
      this.exercise.title = "";
      this.exercise.sets = null;
      this.exercise.details = "";
    },
    add: function() {
      this.error = "";
      this.alert = false;

      if (this.exercise.title == "")
        this.error = "Please give the lift a title.";
      else if (this.exercise.sets == null)
        this.error = "Please select the number of sets for this workout.";
      else {
        let newExer = {
          id: this.count,
          title: this.exercise.title,
          sets: this.exercise.sets,
          details: this.exercise.details,
        };
        this.plan.exercises.push(newExer);
        this.count++;
        this.reset();
        this.dialog = false;
      }
    },
    deleteRow: function(idx) {
      this.plan.exercises.splice(idx, 1);
    },
    save: function() {
      if (this.plan.exercises.length == 0) this.alert = true;
      else console.log("Hello World, saving new plan");
    },
  },
};
</script>

<style></style>
