import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/styleKits/${id}`).then(e => e.json())
  },
  delete(id) {
    return fetch(`${Settings.remoteURL}/styleKits/${id}`, {
      method: "DELETE"
    }).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/stylekits`).then(e => e.json())
  },
  put(editedKit) {
    return fetch(`${Settings.remoteURL}/styleKits/${editedKit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedKit)
    }).then(data => data.json());
  },
  postKit(newKit) {
    return fetch(`${Settings.remoteURL}/styleKits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newKit)
    }).then(data => data.json())
  }
}