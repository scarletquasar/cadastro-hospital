﻿var dq = function(x) {
    return document.querySelector(x);
}

//====================Pacientes====================
function CadastrarPaciente() {
    let data = {
        Nome: dq("#nome_paciente").value,
        Cpf: dq("#cpf_paciente").value,
        Nascimento: dq("#nascimento_paciente").value,
        Sexo: dq("#sexo_paciente").options[dq("#sexo_paciente").selectedIndex].value,
        Email: dq("#email_paciente").value,
        Telefone: dq("#telefone_paciente").value
    }

    fetch("../Api/Paciente", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Paciente criado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

function EditarPaciente() {
    let data = {
        Id: dq("#id_paciente").value,
        Nome: dq("#enome_paciente").value,
        Cpf: dq("#ecpf_paciente").value,
        Nascimento: dq("#enascimento_paciente").value,
        Sexo: dq("#esexo_paciente").options[dq("#esexo_paciente").selectedIndex].value,
        Email: dq("#eemail_paciente").value,
        Telefone: dq("#etelefone_paciente").value
    }

    fetch("../Api/Paciente", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Paciente editado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

function ApagarPaciente(id) {
    fetch("../Api/Paciente", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({Id: id})
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Paciente apagado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

fetch("../Api/Paciente")
.then(response => response.json())
.then(data => {
    data.forEach((x) => {
        dq("#pacientes").innerHTML += 
        x.Id + " | " + "<b>" + x.Nome + "</b> | " + x.Cpf + " | " + x.Nascimento + " | " + x.Email + " | Sexo: " + x.Sexo + " | "
        + x.Telefone + " | <a href='#' onclick='ApagarPaciente(" + x.Id + ")'>[Apagar]</a>" + "<br>";
    });
});

//====================Exames====================

function CadastrarExame() {
    let data = {
        Nome: dq("#nome-exame").value,
        TipoexameId: dq("#tipo-exame-id").value,
        Descricao: dq("#descricao-exame").value
    }

    fetch("../Api/Exame", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Exame criado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

function EditarExame() {
    let data = {
        Id: dq("#id-exame").value,
        Nome: dq("#enome-exame").value,
        TipoexameId: dq("#etipo-exame-id").value,
        Descricao: dq("#edescricao-exame").value
    }

    fetch("../Api/Exame", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Exame editado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

function ApagarExame(id) {
    fetch("../Api/Exame", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({Id: id})
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Exame apagado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

fetch("../Api/Exame")
.then(response => response.json())
.then(data => {
    data.forEach((x) => {
        dq("#exames").innerHTML += 
        x.Id + " | " + "<b>" + x.Nome + "</b> | Tipo de exame:" + x.TipoexameId + " | Descrição: " 
        + x.Descricao + " | <a href='#' onclick='ApagarExame(" + x.Id + ")'>[Apagar]</a>" + "<br>";
    });
});

//====================Tipos de exame====================

function CadastrarTipoExame() {
    let data = {
        Nome: dq("#nome-tipo-exame").value,
        Descricao: dq("#descricao-tipo-exame").value
    }

    fetch("../Api/TipoExame", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Tipo de exame criado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

function ApagarTipoExame(id) {
    fetch("../Api/TipoExame", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({Id: id})
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Tipo de exame apagado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

function EditarTipoExame() {
    let data = {
        Id: dq("#id-tipo-exame").value,
        Nome: dq("#enome-tipo-exame").value,
        Descricao: dq("#edescricao-tipo-exame").value
    }

    fetch("../Api/TipoExame", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Tipo de exame editado com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

fetch("../Api/TipoExame")
.then(response => response.json())
.then(data => {
    data.forEach((x) => {
        dq("#tipo-exames").innerHTML += 
        x.Id + " | " + "<b>" + x.Nome + "</b> | Descrição: " 
        + x.Descricao + " | <a href='#' onclick='ApagarTipoExame(" + x.Id + ")'>[Apagar]</a>" + "<br>";
    });
});

//====================Consultas====================

function MarcarConsulta() {
    let data = {
        Paciente: dq("#id_paciente").value,
        Exame: dq("#id_exame").value,
        Data: dq("#data_consulta").value
    }

    fetch("../Api/Consulta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Consulta marcada com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

function DesmarcarConsulta(id) {
    fetch("../Api/Consulta", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({Id: id})
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem) {
            alert(data.mensagem);
        }
        else {
            alert("Consulta desmarcada com sucesso");
            location.reload(true);
        }
    })
    .catch((error) => {
        alert("Ocorreu um erro: " + error)
    })
}

fetch("../Api/Consulta")
.then(response => response.json())
.then(data => {
    data.forEach((x) => {
        dq("#consultas").innerHTML += 
        x.Id + " | " + "Id Paciente: <b>" + x.Paciente + "</b> | Exame: " 
        + x.Exame + " | Protocolo: " + x.Protocolo + " | Data: " + x.Data + 
        " | <a href='#' onclick='DesmarcarConsulta(" + x.Id + ")'>[Desmarcar]</a>" + "<br>";
    });
});
