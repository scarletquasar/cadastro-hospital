using cadastro_hospital.Models;
using System.Linq;
using System.Text.Json;
using System;

//TODO: Adicionar validadores de informação
namespace cadastro_hospital.Data {
    public static class GerenciarPacientes {
        public static string Novo(Paciente paciente) {
            cadastro_hospitalContext ctx = new cadastro_hospitalContext();

            try {
                var cpf_equals_list = ctx.Pacientes.Where(x => x.Cpf == paciente.Cpf).ToList();

                if(cpf_equals_list.Count > 0) {
                    throw new Exception("Já existe um CPF igual a esse cadastrado no sistema.");
                }

                ctx.Pacientes.Add(paciente);
                ctx.SaveChanges();
                return JsonSerializer.Serialize(paciente);
            }
            catch(Exception e) {
                return JsonSerializer.Serialize(new Erro() {
                    mensagem = "Ocorreu um erro ao realizar a ação: " + e
                });
            }
        }

        public static string Alterar(int id, Paciente paciente) {
            cadastro_hospitalContext ctx = new cadastro_hospitalContext();
            Paciente entity = ctx.Pacientes.Where(x => x.Id == id).FirstOrDefault();
            if (entity == null)
            {
                return JsonSerializer.Serialize(new Erro() {
                    mensagem = "O id do paciente informado não existe"
                });
            }

            ctx.Entry(entity).CurrentValues.SetValues(paciente);
            ctx.SaveChanges();
            return JsonSerializer.Serialize(entity);
        }

        public static string Excluir(int id) {
            cadastro_hospitalContext ctx = new cadastro_hospitalContext();

            try {
                Paciente entity = ctx.Pacientes.Where(x => x.Id == id).FirstOrDefault();
                ctx.Pacientes.Remove(entity);
                ctx.SaveChanges();
                return JsonSerializer.Serialize(entity);
            }
            catch(Exception e) {
                return JsonSerializer.Serialize(new Erro() {
                    mensagem = "Ocorreu um erro ao realizar a ação: " + e
                });
            }

        }
    }
}