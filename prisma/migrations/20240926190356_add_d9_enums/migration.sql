-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Tag" ADD VALUE 'Phi_Beta_Sigma';
ALTER TYPE "Tag" ADD VALUE 'Zeta_Phi_Beta';
ALTER TYPE "Tag" ADD VALUE 'Iota_Phi_Theta';
ALTER TYPE "Tag" ADD VALUE 'Alpha_Phi_Alpha';
ALTER TYPE "Tag" ADD VALUE 'Omega_Psi_Phi';
ALTER TYPE "Tag" ADD VALUE 'Alpha_Kappa_Alpha';
ALTER TYPE "Tag" ADD VALUE 'Kappa_Alpha_Psi';
ALTER TYPE "Tag" ADD VALUE 'Sigma_Gamma_Rho';
ALTER TYPE "Tag" ADD VALUE 'Delta_Sigma_Theta';
