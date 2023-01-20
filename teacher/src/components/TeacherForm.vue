<template>
    <section>

        <h3>Añadir profesores</h3>
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" v-model="teacher.teacherName" />
        </div>
        <div>
            <label for="apellidos">Apellidos</label>
            <input type="text" v-model="teacher.surname" />
        </div>
        <div>
            <label for="dni">Dni</label>
            <input type="text" v-model="teacher.dni" />
        </div>
        <div>
            <label for="apellidos">Materias</label>
            <input type="text" v-model="subject" />
            <button @click="handleSubject()">Agregar</button>
            <div>
                <ul>
                    <li v-for="(sub, index) in teacher.subjects" :key="index">{{sub}}</li>
                </ul>
            </div>
        </div>

        <input type="checkbox" v-model="teacher.doc" />Documentación entregada 
        <button @click="handleAddTeacher()">Agregar</button>
        
    </section>

    <section>
        <h3>Listado de profesores</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Dni</th>
                    <th>Materias</th>
                    <th>Documentación entregada</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="teac in teachers" :key="teac.dni">
                    <td>{{teac.teacherName}}</td>
                    <td>{{teac.surname}}</td>
                    <td>{{teac.dni}}</td>
                    <td>
                        <ul>
                            <li v-for="(mat, index) in teac.subjects" :key="index">
                                {{mat}}
                            </li>
                        </ul>
                    </td>
                    <td v-if="teac.doc">Entregada</td>
                    <td v-else>No Entregada</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts" setup>
    import {Ref, ref} from 'vue';

    //utilizando typescript
    interface ITeacher{
        teacherName: string,
        surname: string,
        dni: string,
        subjects: Array<string>,
        doc: boolean
    }

    let teacher: Ref<ITeacher> = ref({
        teacherName: '',
        surname: '',
        dni: '',
        subjects: [],
        doc: false
    });

    let teachers: Ref<Array<ITeacher>> = ref([]);
    let subject: Ref<string> = ref('');

    const handleSubject = () => {
        teacher.value.subjects.push(subject.value);
        subject.value = "";
    } 

    const handleAddTeacher = () => {
        //teachers.value.push(teacher.value);

        teachers.value.push({
            teacherName: teacher.value.teacherName,
            surname: teacher.value.surname,
            dni: teacher.value.dni,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc
        });

        teacher.value.teacherName = "";
        teacher.value.surname = "";
        teacher.value.dni = "";
        teacher.value.subjects = [];
        teacher.value.doc = false;
    }

    //utilizando javascript puro
    /*
    let teacher = ref({
        teacherName: '',
        surname: '',
        dni: '',
        subjects: [],
        doc: false
    });

    let teachers = ref([]);
    let subject = ref('');
    */


</script>

<style scoped>
</style>