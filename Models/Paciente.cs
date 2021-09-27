﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace cadastro_hospital.Models
{
    public partial class Paciente
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(100)]
        public string Nome { get; set; }
        [MaxLength(11)]
        public string Cpf { get; set; }
        public string Nascimento { get; set; }
        public char Sexo { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
    }
}
