let grades = [60, 85, 75, 90, 55, 80];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 70) {
        console.log(`Calificacion: ${grades[i]} Aprueba`);
    } else {
        console.log(`Calificacion: ${grades[i]} Reprueba`);
    }
}
