using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace INSEWepApp.Models
{
    public partial class INSE2021Context : DbContext
    {
        public INSE2021Context()
        {
        }

        public INSE2021Context(DbContextOptions<INSE2021Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Dicionario> Dicionarios { get; set; } = null!;
        public virtual DbSet<InseEsc> InseEscs { get; set; } = null!;
        public virtual DbSet<InseEsc2021> InseEsc2021s { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-O20DB8B\\MSSQLSERVER01;Database=INSE2021;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Dicionario>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Dicionario");

                entity.Property(e => e.Descrição).HasMaxLength(255);

                entity.Property(e => e.Nome).HasMaxLength(255);
            });

            modelBuilder.Entity<InseEsc>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("INSE_ESC");

                entity.Property(e => e.CoMunicipio).HasColumnName("CO_MUNICIPIO");

                entity.Property(e => e.CoUf).HasColumnName("CO_UF");

                entity.Property(e => e.IdEscola).HasColumnName("ID_ESCOLA");

                entity.Property(e => e.InseClassificacao)
                    .HasMaxLength(255)
                    .HasColumnName("INSE_CLASSIFICACAO");

                entity.Property(e => e.MediaInse).HasColumnName("MEDIA_INSE");

                entity.Property(e => e.NoEscola)
                    .HasMaxLength(255)
                    .HasColumnName("NO_ESCOLA");

                entity.Property(e => e.NoMunicipio)
                    .HasMaxLength(255)
                    .HasColumnName("NO_MUNICIPIO");

                entity.Property(e => e.NoUf)
                    .HasMaxLength(255)
                    .HasColumnName("NO_UF");

                entity.Property(e => e.NuAnoSaeb).HasColumnName("NU_ANO_SAEB");

                entity.Property(e => e.PcNivel1).HasColumnName("PC_NIVEL_1");

                entity.Property(e => e.PcNivel2).HasColumnName("PC_NIVEL_2");

                entity.Property(e => e.PcNivel3).HasColumnName("PC_NIVEL_3");

                entity.Property(e => e.PcNivel4).HasColumnName("PC_NIVEL_4");

                entity.Property(e => e.PcNivel5).HasColumnName("PC_NIVEL_5");

                entity.Property(e => e.PcNivel6).HasColumnName("PC_NIVEL_6");

                entity.Property(e => e.PcNivel7).HasColumnName("PC_NIVEL_7");

                entity.Property(e => e.PcNivel8).HasColumnName("PC_NIVEL_8");

                entity.Property(e => e.QtdAlunosInse).HasColumnName("QTD_ALUNOS_INSE");

                entity.Property(e => e.SgUf)
                    .HasMaxLength(255)
                    .HasColumnName("SG_UF");

                entity.Property(e => e.TpCapital).HasColumnName("TP_CAPITAL");

                entity.Property(e => e.TpLocalizacao).HasColumnName("TP_LOCALIZACAO");

                entity.Property(e => e.TpTipoRede).HasColumnName("TP_TIPO_REDE");
            });

            modelBuilder.Entity<InseEsc2021>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("INSE_ESC_2021");

                entity.Property(e => e.CoMunicipio).HasColumnName("CO_MUNICIPIO");

                entity.Property(e => e.CoUf).HasColumnName("CO_UF");

                entity.Property(e => e.IdEscola).HasColumnName("ID_ESCOLA");

                entity.Property(e => e.InseClassificacao)
                    .HasMaxLength(255)
                    .HasColumnName("INSE_CLASSIFICACAO");

                entity.Property(e => e.MediaInse).HasColumnName("MEDIA_INSE");

                entity.Property(e => e.NoEscola)
                    .HasMaxLength(255)
                    .HasColumnName("NO_ESCOLA");

                entity.Property(e => e.NoMunicipio)
                    .HasMaxLength(255)
                    .HasColumnName("NO_MUNICIPIO");

                entity.Property(e => e.NoUf)
                    .HasMaxLength(255)
                    .HasColumnName("NO_UF");

                entity.Property(e => e.NuAnoSaeb).HasColumnName("NU_ANO_SAEB");

                entity.Property(e => e.PcNivel1).HasColumnName("PC_NIVEL_1");

                entity.Property(e => e.PcNivel2).HasColumnName("PC_NIVEL_2");

                entity.Property(e => e.PcNivel3).HasColumnName("PC_NIVEL_3");

                entity.Property(e => e.PcNivel4).HasColumnName("PC_NIVEL_4");

                entity.Property(e => e.PcNivel5).HasColumnName("PC_NIVEL_5");

                entity.Property(e => e.PcNivel6).HasColumnName("PC_NIVEL_6");

                entity.Property(e => e.PcNivel7).HasColumnName("PC_NIVEL_7");

                entity.Property(e => e.PcNivel8).HasColumnName("PC_NIVEL_8");

                entity.Property(e => e.QtdAlunosInse).HasColumnName("QTD_ALUNOS_INSE");

                entity.Property(e => e.SgUf)
                    .HasMaxLength(255)
                    .HasColumnName("SG_UF");

                entity.Property(e => e.TpCapital).HasColumnName("TP_CAPITAL");

                entity.Property(e => e.TpLocalizacao).HasColumnName("TP_LOCALIZACAO");

                entity.Property(e => e.TpTipoRede).HasColumnName("TP_TIPO_REDE");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
