window.onload = function () {
    if (typeof web3 === "undefined") {
        document.getElementById("metamask").innerHTML = 'You need <a href="https://metamask.io/">MetaMask</a> browser plugin to run this example'
    }
}