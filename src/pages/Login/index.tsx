import { Button } from "@mui/material";
import React from "react";

import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";

export const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
              Entrar em sua conta
            </h2>

            <form
              className="mt-8 space-y-6 flex justify-center text-center"
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />

              <div className="-space-y-px rounded-md shadow-sm">
                <div className="mb-6">
                  <label htmlFor="email" className="sr-only">
                    Email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="relative block w-80 appearance-none 
                    rounded-none border border-gray-300
                    px-3 py-3 text-gray-900 placeholder-gray-600 focus:z-10
                    focus:border-none focus:outline-none 
                    focus:ring-blue-500 sm:text-sm"
                    placeholder="Seu e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="senha" className="sr-only">
                    Senha:
                  </label>
                  <input
                    id="senha"
                    type="password"
                    className="relative block w-80 appearance-none 
                    rounded-none border border-gray-300
                    px-3 py-3 text-gray-900 placeholder-gray-600 
                    focus:border-none focus:outline-none 
                    focus:ring-blue-500 sm:text-sm"
                    placeholder="Senha"
                  />
                </div>
                <div>
                  <button className="w-full mt-4 p-3 flex justify-center hover:opacity-60 hover:transition-opacity">
                    Entrar
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-2 text-center text-base text-gray-700 mb-2">
              Ou entrar com
            </p>
            <div className="flex justify-center text-center">
              <button className="mr-4">
                <FaGithub color={"black"} size={24} />
              </button>
              <button className="mr-4">
                <FaGoogle color={theme.palette.primary.main} size={24} />
              </button>
              <button className="hover:shadow-md">
                <FaFacebook color={theme.palette.secondary.main} size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
